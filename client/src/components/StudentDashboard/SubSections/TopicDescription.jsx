import React, { useState, useEffect } from "react";
import { FaJava, FaCheckCircle, FaLock } from "react-icons/fa";
import { MdRadioButtonUnchecked, MdCheckCircle } from "react-icons/md";
import { IoArrowBackCircleOutline } from "react-icons/io5";

const TopicDescription = ({ onBack, onProgressUpdate }) => {
  // Track which sections are unlocked (0 is always unlocked)
  const [unlockedSections, setUnlockedSections] = useState([0]);
  const [currentQuiz, setCurrentQuiz] = useState(null);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [quizResults, setQuizResults] = useState({});
  const [progress, setProgress] = useState(0);

  // Knowledge Check Questions for each section
  const knowledgeChecks = {
    0: {
      title: "Knowledge Check: Overview",
      questions: [
        {
          id: 1,
          question: "What does WORA stand for in Java?",
          options: [
            "Write Once, Read Anywhere",
            "Write Once, Run Anywhere",
            "Write Often, Run Always",
            "Work Once, Repeat Always",
          ],
          correct: 1,
        },
        {
          id: 2,
          question: "Which company originally developed Java?",
          options: ["Microsoft", "Sun Microsystems", "Oracle", "IBM"],
          correct: 1,
        },
      ],
    },
    1: {
      title: "Knowledge Check: Key Features",
      questions: [
        {
          id: 3,
          question: "What makes Java platform independent?",
          options: [
            "C++ Compiler",
            "Java Virtual Machine (JVM)",
            "Operating System",
            "Hardware Architecture",
          ],
          correct: 1,
        },
        {
          id: 4,
          question: "Java is primarily what type of programming language?",
          options: ["Procedural", "Functional", "Object-Oriented", "Assembly"],
          correct: 2,
        },
      ],
    },
    2: {
      title: "Knowledge Check: First Program",
      questions: [
        {
          id: 5,
          question: "What is the entry point of a Java application?",
          options: [
            "start() method",
            "main() method",
            "init() method",
            "run() method",
          ],
          correct: 1,
        },
        {
          id: 6,
          question: "Which statement is used to print output in Java?",
          options: [
            "console.log()",
            "print()",
            "System.out.println()",
            "echo()",
          ],
          correct: 2,
        },
      ],
    },
    3: {
      title: "Knowledge Check: Applications",
      questions: [
        {
          id: 7,
          question: "Which mobile platform primarily uses Java?",
          options: ["iOS", "Android", "Windows Phone", "BlackBerry"],
          correct: 1,
        },
      ],
    },
  };

  const handleAnswerSelect = (questionId, optionIndex) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionId]: optionIndex,
    });
  };

  const handleSubmitQuiz = (sectionIndex) => {
    const quiz = knowledgeChecks[sectionIndex];
    let correct = 0;
    let total = quiz.questions.length;

    quiz.questions.forEach((q) => {
      if (selectedAnswers[q.id] === q.correct) {
        correct++;
      }
    });

    const passed = correct >= Math.ceil(total * 0.7); // 70% to pass

    setQuizResults({
      ...quizResults,
      [sectionIndex]: { correct, total, passed },
    });

    if (passed) {
      // Unlock next section
      if (!unlockedSections.includes(sectionIndex + 1)) {
        setUnlockedSections([...unlockedSections, sectionIndex + 1]);
      }
    }

    // Always close the modal after submission
    setCurrentQuiz(null);
  };

  const openKnowledgeCheck = (sectionIndex) => {
    setCurrentQuiz(sectionIndex);
    setSelectedAnswers({});
  };

  // Calculate progress based on completed knowledge checks
  useEffect(() => {
    const totalCheckpoints = Object.keys(knowledgeChecks).length; // 4 checkpoints
    const completedCheckpoints = Object.values(quizResults).filter(
      (result) => result.passed
    ).length;
    const calculatedProgress = (completedCheckpoints / totalCheckpoints) * 100;
    setProgress(calculatedProgress);

    // Notify parent component about progress update
    if (onProgressUpdate) {
      onProgressUpdate(calculatedProgress);
    }
  }, [quizResults, onProgressUpdate]);

  const sections = [
    {
      title: "Overview",
      content: (
        <>
          <p className="text-justify mb-4">
            <span className="font-semibold text-orange-600">Java</span> is a
            powerful, versatile, and platform-independent programming language
            developed by Sun Microsystems in 1995 (now owned by Oracle
            Corporation). It follows the principle of{" "}
            <span className="italic font-semibold">
              "Write Once, Run Anywhere" (WORA)
            </span>
            , meaning Java programs can run on any device that has the Java
            Virtual Machine (JVM) installed.
          </p>
          <p className="text-justify mb-4">
            Java is an object-oriented programming (OOP) language, which means
            it organizes code into reusable objects and classes. This makes Java
            ideal for building scalable, maintainable, and robust applications
            across various platforms including mobile devices, enterprise
            systems, web applications, and cloud computing infrastructure.
          </p>
        </>
      ),
    },
    {
      title: "Key Features",
      content: (
        <ul className="space-y-3 ml-6">
          <li className="text-justify">
            <span className="font-semibold text-gray-900">
              Platform Independent:
            </span>{" "}
            Java code compiles to bytecode that runs on any platform with JVM,
            making it truly cross-platform.
          </li>
          <li className="text-justify">
            <span className="font-semibold text-gray-900">
              Object-Oriented:
            </span>{" "}
            Everything in Java is an object, promoting code reusability,
            modularity, and easier maintenance.
          </li>
          <li className="text-justify">
            <span className="font-semibold text-gray-900">Secure:</span> Java
            provides robust security features including bytecode verification,
            secure class loading, and no explicit pointers.
          </li>
          <li className="text-justify">
            <span className="font-semibold text-gray-900">
              High Performance:
            </span>{" "}
            Just-In-Time (JIT) compiler and efficient memory management ensure
            optimal performance.
          </li>
          <li className="text-justify">
            <span className="font-semibold text-gray-900">Multi-threaded:</span>{" "}
            Java's built-in support for multithreading enables concurrent
            execution of multiple parts of a program.
          </li>
        </ul>
      ),
    },
    {
      title: "Your First Java Program",
      content: (
        <>
          <p className="text-justify mb-4">
            Let's examine the classic "Hello, World!" program to understand
            Java's basic structure:
          </p>
          <div className="bg-gray-50 border border-gray-300 rounded-lg p-6 mb-4 font-mono text-sm">
            <pre className="text-gray-800">
              {`public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`}
            </pre>
          </div>
          <div className="ml-6 space-y-2 text-sm">
            <p>
              <span className="font-semibold">Line 1:</span> Declares a public
              class named{" "}
              <code className="bg-gray-100 px-2 py-0.5 rounded">
                HelloWorld
              </code>
            </p>
            <p>
              <span className="font-semibold">Line 2:</span> Defines the{" "}
              <code className="bg-gray-100 px-2 py-0.5 rounded">main</code>{" "}
              method - the entry point of every Java application
            </p>
            <p>
              <span className="font-semibold">Line 3:</span> Uses{" "}
              <code className="bg-gray-100 px-2 py-0.5 rounded">
                System.out.println()
              </code>{" "}
              to print text to the console
            </p>
          </div>
        </>
      ),
    },
    {
      title: "Common Applications",
      content: (
        <>
          <p className="text-justify mb-4">
            Java is extensively used in various domains:
          </p>
          <ul className="grid grid-cols-2 gap-3 ml-6">
            <li className="text-gray-800">• Android Mobile Applications</li>
            <li className="text-gray-800">• Enterprise Web Applications</li>
            <li className="text-gray-800">• Cloud-based Services</li>
            <li className="text-gray-800">• Desktop Applications</li>
            <li className="text-gray-800">• Banking & Financial Systems</li>
            <li className="text-gray-800">• Big Data Technologies</li>
          </ul>
        </>
      ),
    },
    {
      title: "Why Learn Java?",
      content: (
        <p className="text-justify mb-4">
          Java remains one of the most popular programming languages worldwide.
          Learning Java provides strong fundamentals in object-oriented
          programming, opens doors to numerous career opportunities, and serves
          as a solid foundation for learning other modern programming languages.
          With its extensive ecosystem, robust community support, and widespread
          industry adoption, Java continues to be a valuable skill for
          developers at all levels.
        </p>
      ),
    },
  ];
  return (
    <div className="min-h-screen">
      {/* Improved Back Button */}
      <div className="bg-[#caeaff] border-b py-2 border-white sticky top-0 z-40 flex items-center gap-3">
        {onBack && (
          <div className="px-6 py-3">
            <button
              onClick={onBack}
              className=""
            >
              <IoArrowBackCircleOutline className="text-3xl text-blue-500  hover:text-blue-700" />
            </button>
          </div>
        )}
        <div className="w-full">
          <div className="flex items-center gap-4">
            <FaJava className="text-5xl text-orange-600" />
            <div className="w-full flex items-center justify-between mb-2">
              <div>
                <h1 className="text-4xl font-bold text-gray-900">
                  Intoduction to Java
                </h1>
                <p className="text-sm text-gray-600 mb-2">
                  Programming Language Documentation
                </p>
              </div>
              <div>
                {/* Progress Bar */}
                <div className="w-48 bg-white rounded-full h-2 overflow-hidden">
                  <div
                    className={`h-full transition-all duration-500 rounded-full bg-green-600`}
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
                <p className="text-xs text-gray-500 mt-1 float-end">
                  {
                    Object.values(quizResults).filter((result) => result.passed)
                      .length
                  }
                  /{Object.keys(knowledgeChecks).length} checkpoints
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">

          {/* Document Content */}
          <div className="px-12 py-6 space-y-8 text-gray-800 leading-relaxed">
            {/* Render sections with knowledge checks */}
            {sections.map((section, index) => {
              const isUnlocked = unlockedSections.includes(index);
              const hasQuiz = knowledgeChecks[index];
              const quizResult = quizResults[index];

              return (
                <section
                  key={index}
                  className={`${!isUnlocked ? "opacity-50" : ""}`}
                >
                  {/* Section Header with Status */}
                  <div className="flex items-center justify-between mb-2">
                    <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-gray-200 pb-2 flex-1">
                      {section.title}
                    </h2>
                    <div className="ml-4">
                      {quizResult?.passed ? (
                        <FaCheckCircle
                          className="text-green-600 text-2xl"
                          title="Completed"
                        />
                      ) : !isUnlocked ? (
                        <FaLock
                          className="text-gray-400 text-2xl"
                          title="Locked"
                        />
                      ) : null}
                    </div>
                  </div>

                  {/* Section Content */}
                  {isUnlocked ? (
                    <>
                      <div className="mb-3">{section.content}</div>

                      {/* Knowledge Check Button */}
                      {hasQuiz && !quizResult?.passed && (
                        <div className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
                          <div className="flex items-center justify-between">
                            <div>
                              <h3 className="font-semibold text-blue-900 mb-1">
                                Knowledge Check Required
                              </h3>
                              <p className="text-sm text-blue-700">
                                Complete this checkpoint to unlock the next
                                section
                              </p>
                            </div>
                            <button
                              onClick={() => openKnowledgeCheck(index)}
                              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                            >
                              Start Quiz
                            </button>
                          </div>
                        </div>
                      )}

                      {/* Quiz Result Display */}
                      {quizResult && (
                        <div
                          className={`mt-2 p-4 rounded-lg ${
                            quizResult.passed
                              ? "bg-green-50 border-l-4 border-green-500"
                              : "bg-red-50 border-l-4 border-red-500"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            {quizResult.passed ? (
                              <>
                                <MdCheckCircle className="text-green-600 text-2xl" />
                                <div>
                                  <p className="font-semibold text-green-900">
                                    Checkpoint Passed!
                                  </p>
                                  <p className="text-sm text-green-700">
                                    Score: {quizResult.correct}/
                                    {quizResult.total} - Next section unlocked
                                  </p>
                                </div>
                              </>
                            ) : (
                              <>
                                <MdRadioButtonUnchecked className="text-red-600 text-2xl" />
                                <div>
                                  <p className="font-semibold text-red-900">
                                    Need More Practice
                                  </p>
                                  <p className="text-sm text-red-700">
                                    Score: {quizResult.correct}/
                                    {quizResult.total} - Review the material and
                                    try again
                                  </p>
                                  <button
                                    onClick={() => openKnowledgeCheck(index)}
                                    className="mt-2 text-sm text-red-700 underline hover:text-red-900"
                                  >
                                    Retry Quiz
                                  </button>
                                </div>
                              </>
                            )}
                          </div>
                        </div>
                      )}
                    </>
                  ) : (
                    <div className="text-center py-8 text-gray-500">
                      <FaLock className="text-4xl mx-auto mb-3 text-gray-400" />
                      <p className="font-semibold">This section is locked</p>
                      <p className="text-sm">
                        Complete the previous checkpoint to unlock
                      </p>
                    </div>
                  )}
                </section>
              );
            })}

            {/* Footer */}
            <div className="pt-6 mt-8 border-t-2 border-gray-200 text-center text-sm text-gray-500">
              <p>© 2025 RICR Learning Management System</p>
            </div>
          </div>
        </div>
      </div>

      {/* Knowledge Check Modal */}
      {currentQuiz !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-9998 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-lg w-full max-w-2xl max-h-[85vh] overflow-hidden flex flex-col relative z-9999">
            {/* Modal Header */}
            <div className="bg-linear-to-r from-blue-100 to-blue-200 text-gray-800 px-5 py-3 border-b">
              <h2 className="text-lg font-semibold">
                {knowledgeChecks[currentQuiz].title}
              </h2>
              <p className="text-xs text-gray-600 mt-0.5">
                Answer all questions to proceed (70% required to pass)
              </p>
            </div>

            {/* Modal Content */}
            <div className="flex-1 overflow-y-auto p-4">
              <div className="space-y-4">
                {knowledgeChecks[currentQuiz].questions.map((q, qIndex) => (
                  <div
                    key={q.id}
                    className="border border-gray-200 rounded-lg p-4"
                  >
                    <p className="text-sm font-semibold text-gray-900 mb-3">
                      {qIndex + 1}. {q.question}
                    </p>
                    <div className="space-y-2">
                      {q.options.map((option, optIndex) => (
                        <label
                          key={optIndex}
                          className={`flex items-center p-2.5 rounded-lg border cursor-pointer transition-all ${
                            selectedAnswers[q.id] === optIndex
                              ? "border-blue-400 bg-blue-50"
                              : "border-gray-200 hover:border-blue-300 hover:bg-gray-50"
                          }`}
                        >
                          <input
                            type="radio"
                            name={`question-${q.id}`}
                            checked={selectedAnswers[q.id] === optIndex}
                            onChange={() => handleAnswerSelect(q.id, optIndex)}
                            className="mr-2.5 w-4 h-4 text-blue-500"
                          />
                          <span className="text-gray-800 text-sm">
                            {option}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="border-t border-gray-200 px-5 py-3 flex justify-between items-center bg-gray-50">
              <button
                onClick={() => setCurrentQuiz(null)}
                className="px-4 py-1.5 text-sm text-gray-600 hover:text-gray-800 font-semibold"
              >
                Cancel
              </button>
              <button
                onClick={() => handleSubmitQuiz(currentQuiz)}
                disabled={knowledgeChecks[currentQuiz].questions.some(
                  (q) => selectedAnswers[q.id] === undefined
                )}
                className={`px-5 py-1.5 text-sm rounded font-semibold transition-colors ${
                  knowledgeChecks[currentQuiz].questions.some(
                    (q) => selectedAnswers[q.id] === undefined
                  )
                    ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                    : "bg-blue-100 text-blue-700 hover:bg-blue-200"
                }`}
              >
                Submit Answers
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TopicDescription;
