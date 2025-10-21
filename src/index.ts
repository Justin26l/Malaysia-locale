import data_ from "../data/districts/districts.json";
import data_ms from "../data/districts/districts-ms.json";
import data_cn from "../data/districts/districts-cn.json";

export type DistrictData = typeof data_;
export type StateCode = keyof DistrictData;

export class District {

  private data_src: any = {
    en: data_,
    ms: data_ms,
    cn: data_cn,
  };

  private lang: string;
  private data : {[key:string]: string[]};

  // construct by language
  constructor(lang: 'en' | 'ms' | 'cn' = 'en') {
    this.lang = lang in this.data_src ? lang : 'en';
    this.data = this.data_src[this.lang];
  };

  all(): string[] {
    const districts : string[] = [];
    for (const state in this.data) {
      districts.push(...this.data[state]);
    }
    return districts;
  }

  // all districts group by state
  allByState() : {[key: string]: string[]} {
    return this.data;
  }

  // get by single state
  byState(stateCode: StateCode) : string[] {
    const districts = this.data;
    return districts[stateCode];
  }
}

export default {
  District,
};