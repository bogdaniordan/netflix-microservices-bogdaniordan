import axios from "axios";

const VIDEO_URL_API = "http://localhost:9191/videos";

class VideoService {
    getAllVideos() {
        return axios.get(VIDEO_URL_API);
    }
}


export default new VideoService();