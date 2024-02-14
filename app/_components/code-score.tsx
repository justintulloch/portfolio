


import React, { useEffect, useState } from "react";
import { getLeetCode } from "./leet-code";

const LeetScore: React.FC = () => {
    const [loading, setLoading] = useState(false);
    const [userData, setUserData] = useState<any>({});
    const id = "lizardking"

    useEffect(() => {
        const fetchData = async () => {
           setLoading(true); // Start loading
           const data = await getLeetCode(id);
           setUserData(data);
           setLoading(false); // Finish loading
        }
        fetchData();  
    }, []); 

    return (
        <div>
            {loading ? <p>Loading...</p> : (
                <>
                    <div>
                        <h1>{userData.username}</h1>
                        <h1>{userData.ranking}</h1>
                    </div>
                    <div>
                        <h1>{userData.solvedProblem}</h1>
                    </div>
                    <div>
                        <h1>{userData.lang}</h1>
                    </div> 
                </>
            )}
        </div>
    );
}

export default LeetScore;
