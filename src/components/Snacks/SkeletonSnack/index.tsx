import { Skeleton } from "../../Skeleton";
import { Conteiner } from "./styles";

export function SkeletonSnack() {
  return (
    <div className="skeleton-wrapper">
      <Conteiner>
        <Skeleton type="title" />
        <Skeleton type="thumbnail" />
        <Skeleton type="text" />
        <Skeleton type="text" />
        <div>
        <Skeleton type="title" />
        <Skeleton type="image" />
        </div>
      </Conteiner>
    </div>
  );
}
