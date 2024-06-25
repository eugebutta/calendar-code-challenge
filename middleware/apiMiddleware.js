import axios from "axios";

const baseURL =
  "https://xjvq5wtiye.execute-api.us-east-1.amazonaws.com/interview/api/v1";

export default fetchChallengeData = async () => {
  try {
    const response = await axios.get(`${baseURL}/challenge`);
    return response.data;
  } catch (error) {
    console.error("Error fetching challenge data:", error);
    throw error;
  }
};
