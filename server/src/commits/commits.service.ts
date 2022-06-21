import { Injectable } from "@nestjs/common";
import axios from 'axios';

@Injectable({})
export class CommitsService {
    getcommits() {
        const commits = axios
          .get('https://api.github.com/repos/EliasBobadilla/Fulltimeforce/commits')
          .then((data) => {
           
            return data.data;
          })
          .catch((e) => {
            throw new Error(e);
          });
        return commits;
      }

}
    

