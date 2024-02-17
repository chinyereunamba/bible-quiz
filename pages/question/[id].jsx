import { useRouter } from "next/router";
import { data } from "@/components/questions";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const Question = () => {
  const router = useRouter();
  const { id } = router.query;
  const questionId = Number(id);
  const question = data[questionId - 1] || null;

  const handleBack = () => {
    router.push("/");
  };

  const renderHTML = (htmlString) => {
    return { __html: htmlString };
  };

  return (
    <section className={`description ${inter.className}`}>
      <p onClick={handleBack}>Back</p>
      <div>
        {question ? (
          <>
            <h1>Question {question.id}</h1>
            <p dangerouslySetInnerHTML={renderHTML(question.question)}></p>
          </>
        ) : (
          <p>No question found</p> 
        )}
      </div>
    </section>
  );
};

export default Question;
