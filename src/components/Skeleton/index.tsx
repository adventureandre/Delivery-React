import { SkeletonElement } from "./styles";

export interface SkeletonProps {
  type: 'title'|'image'|'text'|'thumbnail'
}

export function Skeleton({ type }: SkeletonProps){

  return <SkeletonElement type={type}/>
}
