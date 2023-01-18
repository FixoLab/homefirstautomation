import Skeleton from "react-loading-skeleton";

const LoadingSpinner = () => {
  return (
    <>
      {Array(8)
        .fill("")
        ?.map((data, i) => (
          <article key={i}>
            <div className="post-inner thin ">
              <div className={`entry-content`}>
                <Skeleton style={{ borderRadius: 5 }} height={500} />
              </div>
            </div>
          </article>
        ))}
    </>
  );
};

export default LoadingSpinner;
