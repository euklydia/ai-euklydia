import "./styles.css";
import { Icon, TextCaption, Title } from "../../../../components";

export const Efficiency = () => {
  return (
    <section className="flex justify-between container pt-[5rem]">
      <div className="w-[496px]">
        <Title
          text={
            "Stay Ahead of Competitors with Real time AI-Powered Efficiency"
          }
          fontSize="title4"
          color={"primary-inverse"}
        />
      </div>
      <div
        id="Efficiency"
        className="flex w-full flex-wrap gap-x-1 gap-y-4 relative z-[10]"
      >
        <div className="card green">
          <Icon
            name={"timeSaving"}
            height={144}
            width={144}
            className="absolute -top-[72px] right-0"
          />
          <div className="card-body flex flex-col gap-0.5">
            <Title text={"80%"} className="!text-[#43DDAA]" />
            <Title
              text={"time saving"}
              TagName="h3"
              color={"primary-inverse"}
              fontSize="title5"
            />
            <TextCaption
              text={"AI replaces manual work, enabling strategic creativity"}
              color={"tertiary"}
            />
          </div>
        </div>

        <div className="card orange">
          <Icon
            name={"risksReduced"}
            height={144}
            width={144}
            className="absolute -top-[72px] right-0"
          />
          <div className="card-body flex flex-col gap-0.5">
            <Title text={"40%"} className="!text-[#43DDAA]" />
            <Title
              text={"risks reduced"}
              TagName="h3"
              color={"primary-inverse"}
              fontSize="title5"
            />
            <TextCaption
              text={
                "AI empowers data-driven decisions, minimizing campaign risks"
              }
              color={"tertiary"}
            />
          </div>
        </div>

        <div className="card red">
          <Icon
            name={"boostCost"}
            height={144}
            width={144}
            className="absolute -top-[72px] right-0"
          />
          <div className="card-body flex flex-col gap-0.5">
            <Title text={"40%"} className="!text-[#43DDAA]" />
            <Title
              text={"boost in cost efficiency"}
              TagName="h3"
              color={"primary-inverse"}
              fontSize="title5"
            />
            <TextCaption
              text={"AI strategies maximize ROI, targeting efforts precisely"}
              color={"tertiary"}
            />
          </div>
        </div>

        <div className="card blue">
          <Icon
            name={"increaseCTR"}
            height={144}
            width={144}
            className="absolute -top-[72px] right-0"
          />
          <div className="card-body flex flex-col gap-0.5">
            <Title text={"36%"} className="!text-[#43DDAA]" />
            <Title
              text={"Increase in social CTR "}
              TagName="h3"
              color={"primary-inverse"}
              fontSize="title5"
            />
            <TextCaption
              text={
                "Deliver contextual communication aligned with audience expectations"
              }
              color={"tertiary"}
            />
          </div>
        </div>

        <div className="card green">
          <Icon
            name={"aheadCompetitors"}
            height={144}
            width={144}
            className="absolute -top-[72px] right-0"
          />
          <div className="card-body flex flex-col gap-0.5">
            <Title text={"30%"} className="!text-[#43DDAA]" />
            <Title
              text={"Ahead your competitors"}
              TagName="h3"
              color={"primary-inverse"}
              fontSize="title5"
            />
            <TextCaption
              text={"Optimize cross-platform marketing performance"}
              color={"tertiary"}
            />
          </div>
        </div>

        <div className="card red">
          <Icon
            name={"enhancedProductivity"}
            height={144}
            width={144}
            className="absolute -top-[72px] right-0"
          />
          <div className="card-body flex flex-col gap-0.5">
            <Title text={"30%"} className="!text-[#43DDAA]" />
            <Title
              text={"Enhanced productivity"}
              TagName="h3"
              color={"primary-inverse"}
              fontSize="title5"
            />
            <TextCaption
              text={
                "AI agents boost marketing team productivity by automating repetitive tasks"
              }
              color={"tertiary"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
