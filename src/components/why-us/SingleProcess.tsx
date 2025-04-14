type DataType = {
  title?: string;
  thumb?: string;
  text?: string;
};

export const SingleProcess = ({ process }: { process: DataType }) => {
  const { thumb, title, text } = process;

  return (
    <>
      <div className="item">
        <div className="icon">
          <img
            src={`/ai-euklydia/icons/${thumb}`}
            alt="Icon"
            width={200}
            height={230}
          />
        </div>
        <h4>{title}</h4>
        <p className="green">{text}</p>
      </div>
    </>
  );
};
