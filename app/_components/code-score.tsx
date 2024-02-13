
import { getLeetCode } from "./leet-code";


const LeetScore = async () => {
    const id = "lizardking"

    const { userData } = await getLeetCode(id);
    const { solvedData } = await getLeetCode(id);
    const { subData } = await getLeetCode(id);
    

  
    

    return (
        <div>
            <div>
                <h1>{userData.username}</h1>
                <h1>{userData.ranking}</h1>
            </div>
            <div>
                <h1>{solvedData.solvedProblem}</h1>
            </div>
            <div>
                <h1>{subData.lang}</h1>
            </div>
        </div>
    );
}

export default LeetScore;