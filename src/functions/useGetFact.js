import { useQuery } from "@tanstack/react-query";
import { getFact } from "./api";

export function useGetFact() {
  const {
    isLoading,
    data: fact,
    refetch,
  } = useQuery({
    queryKey: ["fact"],
    queryFn: getFact,
    enabled: false,
  });

  return { isLoading, fact, refetch };
}
