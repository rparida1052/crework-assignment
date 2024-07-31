import { useMemo, type CSSProperties } from "react";

export type TagsHeaderType = {
  className?: string;
  undrawOpinionReJix41?: string;
  introducingTags?: string;
  easilyCategorizeAndFindYo?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propGap?: CSSProperties["gap"];
};

const TagsHeader= ({
  className = "",
  propPadding,
  propGap,
  undrawOpinionReJix41,
  introducingTags,
  easilyCategorizeAndFindYo,
}:TagsHeaderType) => {
  const tagsHeaderStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
      gap: propGap,
    };
  }, [propPadding, propGap]);

  return (
    <div
      className={`flex-1 rounded-lg bg-white box-border overflow-hidden flex flex-row items-center justify-start py-[23px] px-[15px] gap-[10px] min-w-[273px] max-w-full text-left text-base text-gray-400 font-inter border-[1px] border-solid border-whitesmoke-300 mq450:flex-wrap ${className}`}
      style={tagsHeaderStyle}
    >
      <img
        className="h-[61px] w-[77px] relative overflow-hidden shrink-0"
        loading="lazy"
        alt=""
        src={undrawOpinionReJix41}
      />
      <div className="flex-1 flex flex-col items-start justify-start gap-[4px] min-w-[159px]">
        <div className="self-stretch relative font-semibold">
          {introducingTags}
        </div>
        <div className="self-stretch relative text-sm text-gray-200 text-wrap">
          {easilyCategorizeAndFindYo}
        </div>
      </div>
    </div>
  );
};

export default TagsHeader;
