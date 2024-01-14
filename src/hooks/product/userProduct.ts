import { getHotel } from "@/remote/products";
import { useQuery } from "react-query";

export default function useProduct({ id }: { id: string }) {
	return useQuery(["hotel", id], () => getHotel(id));
}
