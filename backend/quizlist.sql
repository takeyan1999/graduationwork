CREATE TABLE QuizList (
    ID INT AUTO_INCREMENT PRIMARY KEY, -- 一意のID、主キー
    Quiz TEXT NOT NULL,                -- クイズの内容
    Choice1 VARCHAR(255) NOT NULL,     -- 選択肢1
    Choice2 VARCHAR(255) NOT NULL,     -- 選択肢2
    Choice3 VARCHAR(255) NOT NULL,     -- 選択肢3
    Choice4 VARCHAR(255) NOT NULL,     -- 選択肢4
    AnswerChoice INT NOT NULL          -- 正解の選択肢 (1～4)
);

INSERT INTO QuizList (ID, Quiz, Choice1, Choice2, Choice3, Choice4, AnswerChoice) VALUES
(1, '次の中で最も長い川はどれですか？', 'ナイル川', 'アマゾン川', 'ミシシッピ川', '黄河', 1),
(2, '日本の首都はどれですか？', '大阪', '京都', '東京', '福岡', 3),
(3, '太陽系の中で最も大きい惑星はどれですか？', '地球', '木星', '土星', '金星', 2),
(4, '「ハムレット」を書いたのは誰ですか？', '夏目漱石', 'トルストイ', 'ウィリアム・シェイクスピア', 'ゲーテ', 3);