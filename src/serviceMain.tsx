import Axios from "axios";
import Config from "./config.json";

const ServiceMain = Axios.create({
  baseURL: Config.baseUrl,
});

export default ServiceMain;
