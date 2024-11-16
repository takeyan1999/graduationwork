package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"os"
	"strconv"

	"github.com/joho/godotenv"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
	"gorm.io/gorm/schema"
)

type QuizList struct {
    ID           int    `json:"id" gorm:"column:id"`
    Quiz         string `json:"Quiz" gorm:"column:quiz"`
    Choice1      string `json:"Choice1"`
    Choice2      string `json:"Choice2"`
    Choice3      string `json:"Choice3"`
    Choice4      string `json:"Choice4"`
    AnswerChoice int    `json:"AnswerChoice"`
}


// TableName を追加
func (QuizList) TableName() string {
	return "quizlist" // 実際のテーブル名を指定
}

var db *gorm.DB

func main() {
	// .envファイルの読み込み
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}

	// 環境変数から接続情報を取得
	username := os.Getenv("DB_USERNAME")
	password := os.Getenv("DB_PASSWORD")
	host := os.Getenv("DB_HOST")
	port := os.Getenv("DB_PORT")
	dbname := os.Getenv("DB_NAME")

	// DSNの作成
	dsn := fmt.Sprintf("%s:%s@tcp(%s:%s)/%s?charset=utf8mb4&parseTime=True&loc=Local",
		username, password, host, port, dbname)
	fmt.Println("DSN:", dsn)

	// データベース接続
	var errDB error
	db, errDB = gorm.Open(mysql.Open(dsn), &gorm.Config{
		NamingStrategy: schema.NamingStrategy{
        SingularTable: true,   // テーブル名を単数形にする
        NoLowerCase:   true,   // スネークケース変換を無効にする
    },
	})
	if errDB != nil {
		log.Fatalf("Failed to connect to the database: %v", errDB)
	} else {
		log.Println("Database connection established")
	}

	// テーブルのマイグレーション
	if !db.Migrator().HasTable(&QuizList{}) {
    if err := db.AutoMigrate(&QuizList{}); err != nil {
        log.Fatalf("Failed to migrate database: %v", err)
    }
}
	log.Println("Database migration completed")

	// エンドポイントの定義
	http.HandleFunc("/quizs",withCORS(func(w http.ResponseWriter, r *http.Request){
		switch r.Method{
		case "GET":
			getQuizs(w,r)
		case "POST":
			addQuiz(w,r)
		case "DELETE":
			deleteQuiz(w,r)
		case "PUT":
			updateQuiz(w,r)
		default:
			http.Error(w, "Method not allow", http.StatusMethodNotAllowed)
		}
	}))

	// サーバーの起動
	log.Println("Server running on port 3000")
	if err := http.ListenAndServe(":3000", nil); err != nil {
		log.Fatalf("Server failed to start: %v", err)
	}
}

// CORS対応ミドルウェア
func withCORS(next http.HandlerFunc) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.Header().Set("Access-Control-Allow-Methods", "GET, POST, DELETE,PUT, OPTIONS")
		w.Header().Set("Access-Control-Allow-Headers", "Content-Type, Authorization")
		
		// OPTIONSリクエストの場合、ヘッダーのみ返して終了
		if r.Method == "OPTIONS" {
			w.WriteHeader(http.StatusOK)
			return
		}

		// OPTIONS以外のリクエストは次のハンドラに処理を渡す
		next(w, r)
	}
}

// GETリクエストでTodoリストを取得
func getQuizs(w http.ResponseWriter, r *http.Request) {

	var quizs []QuizList
    
	result := db.Find(&quizs); 
	if result.Error != nil {
		http.Error(w, result.Error.Error(), http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(quizs)
}

// POSTリクエストで新しいTodoを追加
func addQuiz(w http.ResponseWriter, r *http.Request) {
	var quiz QuizList
	if err := json.NewDecoder(r.Body).Decode(&quiz); err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	if result := db.Create(&quiz); result.Error != nil {
		http.Error(w, result.Error.Error(), http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(quiz)
}

// DELETEリクエストで指定されたIDのTodoを削除
func deleteQuiz(w http.ResponseWriter, r *http.Request) {
	
	// リクエストURLからIDを取得
	idStr := r.URL.Query().Get("id") // クエリパラメータからIDを取得
	if idStr == "" {
		http.Error(w, "ID parameter is required", http.StatusBadRequest)
		return
	}

	// IDを整数に変換
	id, err := strconv.Atoi(idStr)
	if err != nil {
		http.Error(w, "Invalid ID", http.StatusBadRequest)
		return
	}

	// 指定されたIDのTodoを削除
	if result := db.Delete(&QuizList{},"id = ?", id); result.Error != nil {
		http.Error(w, result.Error.Error(), http.StatusInternalServerError)
		return
	}

	// レスポンスを返す
	w.WriteHeader(http.StatusOK)
	w.Write([]byte("Todo deleted successfully"))
}

func updateQuiz(w http.ResponseWriter, r *http.Request) {
	log.Println("Received PUT request to update quiz")

	// リクエストURLからIDを取得
	idStr := r.URL.Query().Get("id") // クエリパラメータからIDを取得
	if idStr == "" {
		http.Error(w, "ID parameter is required", http.StatusBadRequest)
		return
	}

	// IDを整数に変換
	id, err := strconv.Atoi(idStr)
	if err != nil {
		http.Error(w, "Invalid ID", http.StatusBadRequest)
		return
	}

	var quiz QuizList

	// JSONデコード
	if err := json.NewDecoder(r.Body).Decode(&quiz); err != nil {
		log.Printf("Error decoding JSON: %v", err) // デコードエラーをログに出力
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	// IDが提供されているか確認
	if id == 0 {
		log.Println("Quiz ID is missing in the request") // ID不足をログに出力
		http.Error(w, "ID is required to update the quiz", http.StatusBadRequest)
		return
	}

	// 更新処理
	result := db.Model(&QuizList{}).Where("id = ?", id).Updates(quiz)
	if result.Error != nil {
		log.Printf("Error updating quiz: %v", result.Error) // 更新エラーをログに出力
		http.Error(w, result.Error.Error(), http.StatusInternalServerError)
		return
	}


	// 更新されたデータを返す
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(quiz)
}