import React, { useState } from 'react';
import { IoClose } from 'react-icons/io5';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const TopicQuiz = ({ lecture, onClose, onRetryFromStart }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  // Sample quiz questions - can be dynamic based on lecture
  const quizQuestions = [
    {
      id: 1,
      question: "What is the correct syntax to output 'Hello World' in Java?",
      options: [
        "echo('Hello World');",
        "System.out.println('Hello World');",
        "Console.WriteLine('Hello World');",
        "print('Hello World');"
      ],
      correct: 1
    },
    {
      id: 2,
      question: "Which keyword is used to create a class in Java?",
      options: [
        "class",
        "Class",
        "create",
        "new"
      ],
      correct: 0
    },
    {
      id: 3,
      question: "What is the extension of Java files?",
      options: [
        ".js",
        ".javac",
        ".java",
        ".class"
      ],
      correct: 2
    }
  ];

  const handleAnswerSelect = (optionIndex) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestion]: optionIndex
    });
  };

  const handleNext = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = () => {
    let correctCount = 0;
    quizQuestions.forEach((q, index) => {
      if (selectedAnswers[index] === q.correct) {
        correctCount++;
      }
    });
    setScore(correctCount);
    setShowResults(true);
  };

  const handleRetry = () => {
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setShowResults(false);
    setScore(0);
  };

  const currentQ = quizQuestions[currentQuestion];
  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;

  return (
    <div className="fixed inset-0 bg-black/85 z-9998 flex items-center justify-center p-4 pt-10">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-3xl max-h-[90vh] overflow-hidden flex flex-col relative z-[9999]">
        {/* Modal Header */}
        <div className="bg-linear-to-r from-green-100 to-teal-100 text-gray-800 px-5 py-3 flex items-center justify-between border-b">
          <div>
            <h2 className="text-lg font-semibold">Quiz: {lecture.title}</h2>
            <p className="text-xs text-gray-600 mt-0.5">Test your understanding</p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-600 hover:bg-gray-200 rounded-full p-1.5 transition-all"
          >
            <IoClose className="text-2xl" />
          </button>
        </div>

        {/* Progress Bar */}
        {!showResults && (
          <div className="bg-gray-200 h-1.5">
            <div 
              className="bg-green-500 h-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        )}

        {/* Quiz Content */}
        <div className="flex-1 overflow-y-auto p-4">
          {!showResults ? (
            <div className="space-y-4">
              {/* Question Counter */}
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold text-gray-600">
                  Question {currentQuestion + 1} of {quizQuestions.length}
                </span>
                <span className="text-sm text-gray-500">
                  {Object.keys(selectedAnswers).length} / {quizQuestions.length} answered
                </span>
              </div>

              {/* Question */}
              <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-green-500">
                <h3 className="text-base font-semibold text-gray-900 mb-4">
                  {currentQ.question}
                </h3>

                {/* Options */}
                <div className="space-y-2">
                  {currentQ.options.map((option, index) => (
                    <label
                      key={index}
                      className={`flex items-center p-3 rounded-lg border cursor-pointer transition-all ${
                        selectedAnswers[currentQuestion] === index
                          ? 'border-green-500 bg-green-50'
                          : 'border-gray-200 hover:border-green-300 hover:bg-gray-50'
                      }`}
                    >
                      <input
                        type="radio"
                        name={`question-${currentQ.id}`}
                        checked={selectedAnswers[currentQuestion] === index}
                        onChange={() => handleAnswerSelect(index)}
                        className="mr-3 w-4 h-4 text-green-500"
                      />
                      <span className="text-gray-800 flex-1">{option}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            // Results Screen
            <div className="text-center space-y-4">
              {score >= Math.ceil(quizQuestions.length * 0.7) ? (
                <>
                  <FaCheckCircle className="text-4xl text-green-600 mx-auto" />
                  <h3 className="text-xl font-bold text-gray-900">Congratulations! 🎉</h3>
                  <p className="text-sm text-gray-600">You passed the quiz!</p>
                </>
              ) : (
                <>
                  <FaTimesCircle className="text-4xl text-red-600 mx-auto" />
                  <h3 className="text-xl font-bold text-gray-900">Keep Practicing!</h3>
                  <p className="text-sm text-gray-600">Review the material and try again.</p>
                </>
              )}

              {/* Score Display */}
              <div className="bg-gray-50 rounded-lg p-5 max-w-sm mx-auto">
                <div className="text-3xl font-bold text-gray-900 mb-1">
                  {score}/{quizQuestions.length}
                </div>
                <p className="text-sm text-gray-600">Correct Answers</p>
                <div className="mt-2 text-lg font-semibold text-green-600">
                  {Math.round((score / quizQuestions.length) * 100)}%
                </div>
              </div>

              <div className="flex gap-3 justify-center">
                <button
                  onClick={handleRetry}
                  className="px-6 py-2 text-sm bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors font-semibold"
                >
                  Retry Quiz
                </button>
                {score < Math.ceil(quizQuestions.length * 0.7) && onRetryFromStart && (
                  <button
                    onClick={() => {
                      onClose();
                      onRetryFromStart();
                    }}
                    className="px-6 py-2 text-sm bg-orange-100 text-orange-700 rounded-lg hover:bg-orange-200 transition-colors font-semibold"
                  >
                    Review Topic from Start
                  </button>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Navigation Footer */}
        {!showResults && (
          <div className="border-t border-gray-200 px-6 py-4 flex justify-between items-center bg-gray-50">
            <button
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
                currentQuestion === 0
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-gray-300 text-gray-700 hover:bg-gray-400'
              }`}
            >
              Previous
            </button>

            {currentQuestion === quizQuestions.length - 1 ? (
              <button
                onClick={handleSubmit}
                disabled={Object.keys(selectedAnswers).length !== quizQuestions.length}
                className={`px-8 py-2 rounded-lg font-semibold transition-colors ${
                  Object.keys(selectedAnswers).length !== quizQuestions.length
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-green-600 text-white hover:bg-green-700'
                }`}
              >
                Submit Quiz
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold"
              >
                Next
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default TopicQuiz;
