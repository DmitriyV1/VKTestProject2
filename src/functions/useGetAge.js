import { useQuery } from "@tanstack/react-query";
import { getAge } from "./api";

export function useGetAge(name) {
  const {
    isLoading,
    data: age,
    refetch,
  } = useQuery({
    queryKey: ["age"],
    queryFn: () => getAge(name),
    enabled: false,
    retry: false,
  });

  return { isLoading, age, refetch };
}
