CREATE TABLE `quizlist` (
    id               INT(11)  AUTO_INCREMENT NOT NULL PRIMARY KEY COMMENT 'QuizID'
   ,Quiz            VARCHAR(255) NOT NULL  COMMENT 'クイズ'
   ,Choice1            VARCHAR(255) NOT NULL  COMMENT '選択肢１'
   ,Choice2            VARCHAR(255) NOT NULL  COMMENT '選択肢２'
   ,Choice3            VARCHAR(255) NOT NULL  COMMENT '選択肢３'
   ,Choice4            VARCHAR(255) NOT NULL  COMMENT '選択肢４'
   ,AnswerChoice               INT(11)  NOT NULL  COMMENT '答えの選択肢'
);

INSERT INTO `quizlist` (id, Quiz, Choice1, Choice2,Choice3,Choice4,AnswerChoice) VALUES
(1, "3+5=", "1","2","3","8", 4),
(2, "5+2=", "1","2","7","8", 3);

