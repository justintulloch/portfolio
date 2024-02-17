import { basicFetch } from "@/hooks/fetch-function ";
import {
  leetCodeUserData,
  leetCodeUserSolvedProblems,
  leetCodeUserSubmissions,
} from "@/lib/data ";
import { userTypes, solvedTypes, subTypes } from "@/types/types ";

export const getLeetCode = async (id: string) => {
  const userEndpoint: string = leetCodeUserData(id);
  const solvedEndpoint: string = leetCodeUserSolvedProblems(id);
  const subEndpoint: string = leetCodeUserSubmissions(id);

  const userData = await basicFetch<userTypes>(userEndpoint);
  const solvedData = await basicFetch<solvedTypes>(solvedEndpoint);
  const subData = await basicFetch<subTypes>(subEndpoint);

  return {
    userData,
    solvedData,
    subData,
  };
};
