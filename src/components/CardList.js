import React from "react";
import Card from "./Card";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const CardList = (props) => {
  return (
    <div className={`grid grid-cols-2 md:grid-cols-6 gap-5 mt-5 items-stretch`}>
      {props.loading ? (
        <>
          {Array(20)
            .fill(null)
            .map((i) => (
              <SkeletonTheme baseColor="#3a364d" highlightColor="#433e59">
                <div className="bg-th-blue-dark p-3.5 rounded-lg">
                  <div className="flex flex-col items-center">
                    <div className="w-full flex justify-center">
                      <Skeleton count={1} width={100} height={75} />
                    </div>
                    <div className="mt-2">
                      <Skeleton count={1} width={100} />
                    </div>
                  </div>
                </div>
              </SkeletonTheme>
            ))}
        </>
      ) : (
        props.items.map((data, i) => (
          <Card key={i} name={data.name} id={i + 1} />
        ))
      )}
    </div>
  );
};

export default CardList;
