import ProcessData from "./ProcessData.json";
import { SingleProcess } from "./SingleProcess";

interface DataType {
  sectionClass?: string;
}

export const Process = ({ sectionClass }: DataType) => {
  return (
    <>
      <div
        className={`process-style-one-items ${
          sectionClass ? sectionClass : ""
        }`}
      >
        <div className="row">
          {ProcessData.map((process) => (
            <div
              className="col-lg-3 col-md-6 process-style-one-item"
              key={process.id}
            >
              <SingleProcess process={process} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
