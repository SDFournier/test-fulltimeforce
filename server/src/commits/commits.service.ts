import { Injectable } from "@nestjs/common";
import axios from 'axios';

//get the api data from github
@Injectable({})
export class CommitsService {
    getcommits() {
        const commits = axios
          .get('https://api.github.com/repos/SDFournier/test-fulltimeforce/commits')
          .then((data) => {
            return data.data;
          })
          .catch((e) => {
            throw new Error(e);
          });
        return commits;
      }

}
    

