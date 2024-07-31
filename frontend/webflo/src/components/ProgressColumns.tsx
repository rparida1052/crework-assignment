
export type ProgressColumnsType = {
  className?: string;
  designHomePageUI?: string;
  developAndIntegrateUserAu?: string;
  medium?: string;
  emptyProgressDate?: string;
  hrAgo?: string;
};

const ProgressColumns = ({
  className = "",
  designHomePageUI,
  developAndIntegrateUserAu,
  medium,
  emptyProgressDate,
  hrAgo,
}:ProgressColumnsType) => {
  return (
    <div
      className={`self-stretch rounded-lg bg-whitesmoke-100 overflow-hidden flex flex-col items-start justify-start p-3 gap-[16px] text-left text-base text-dimgray-200 font-inter border-[1px] border-solid border-gainsboro-200 ${className}`}
    >
      <div className="self-stretch flex flex-col items-start justify-start gap-[13px]">
        <div className="self-stretch flex flex-col items-start justify-start">
          <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
            <div className="self-stretch relative font-medium">
              {designHomePageUI}
            </div>
            <div className="self-stretch relative text-sm text-gray-300">
              {developAndIntegrateUserAu}
            </div>
          </div>
        </div>
        <div className="rounded-lg bg-orange flex flex-row items-center justify-center py-1.5 px-2 text-xs text-white">
          <div className="relative inline-block min-w-[46px]">{medium}</div>
        </div>
        <div className="flex flex-row items-center justify-start gap-[8px] text-sm">
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/frame-18.svg"
          />
          <div className="relative font-semibold inline-block min-w-[83px]">
            {emptyProgressDate}
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-center justify-start py-0 pr-[178px] pl-0 gap-[20px] text-sm text-gray-300">
        <div className="relative font-medium inline-block min-w-[53px] whitespace-nowrap">
          {hrAgo}
        </div>
      </div>
    </div>
  );
};

export default ProgressColumns;
