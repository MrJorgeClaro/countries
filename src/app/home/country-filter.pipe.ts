import { PipeTransform, Pipe } from "@angular/core";
import { UserResponse } from "../userResponse";

@Pipe({
    name: 'countryFilter'
})
export class CountryFilterPipe implements PipeTransform {
    transform(displayDatas: UserResponse[], searchTerm: string) : UserResponse[]{
        if (!displayDatas || !searchTerm) {
            return displayDatas;
        }
        return displayDatas.filter(displayData => 
            displayData.name.toLocaleLowerCase().indexOf(searchTerm.toLocaleLowerCase()) !== -1);
    }
}