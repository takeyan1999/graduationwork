package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
)

type QuizList struct{
    ID int       		`json:"id"`
    Quiz string			`json:"quiz"`
    Choice1 string		`json:"choice1"`
    Choice2 string		`json:"choice2"`
    Choice3 string		`json:"choice3"`
    Choice4 string		`json:"choice4"`
    AnswerChoice int    `json:"anserchoice"`
}

var quizData = []QuizList{
    {
        ID:           1,
        Quiz:         "次の中で最も長い川はどれですか？",
        Choice1:      "ナイル川",
        Choice2:      "アマゾン川",
        Choice3:      "ミシシッピ川",
        Choice4:      "黄河",
        AnswerChoice: 1,
    },
    {
        ID:           2,
        Quiz:         "日本の首都はどれですか？",
        Choice1:      "大阪",
        Choice2:      "京都",
        Choice3:      "東京",
        Choice4:      "福岡",
        AnswerChoice: 3,
    },
    {
        ID:           3,
        Quiz:         "太陽系の中で最も大きい惑星はどれですか？",
        Choice1:      "地球",
        Choice2:      "木星",
        Choice3:      "土星",
        Choice4:      "金星",
        AnswerChoice: 2,
    },
    {
        ID:           4,
        Quiz:         "「ハムレット」を書いたのは誰ですか？",
        Choice1:      "夏目漱石",
        Choice2:      "トルストイ",
        Choice3:      "ウィリアム・シェイクスピア",
        Choice4:      "ゲーテ",
        AnswerChoice: 3,
    },
}

// ※Goではコードの記述順序は関係ないので、上に書いても下に書いても構いません。
func main() {
	http.HandleFunc("/", getQuiz)
	fmt.Println("Starting server at port 3000")
	log.Fatal(http.ListenAndServe(":3000", nil))
}

func getQuiz(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json; charset=utf8")
    // ここにCORS対応コードを追加します。
	json.NewEncoder(w).Encode(quizData)
}