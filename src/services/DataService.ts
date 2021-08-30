import { Space } from "../model/Model";

/* istanbul ignore file */
export class DataService {
  public async getSpaces(): Promise<Space[]> {
    const result: Space[] = [];
    result.push(
      {
        location: "Paris",
        name: "Paris tower",
        spaceId: "1",
        photoUrl:
          "https://estaticos.muyhistoria.es/media/cache/1140x_thumb/uploads/images/pyr/57baab765bafe83c45be0a61/paris.jpg",
      },
      {
        location: "Spain",
        name: "Some place",
        spaceId: "2",
        photoUrl:
          "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/1600/1600/90/media/abd/refresh/europe/spain-vacations/abd-europe-spain-slideshow-01-plaza-de-espana-1x1.jpg?cb=3",
      },
      {
        location: "Some place",
        name: "Some place",
        spaceId: "3",
      }
    );

    return result;
  }

  public async reserveSpace(spaceId: string): Promise<string | undefined> {
    if (spaceId === "123") {
      return "44545";
    } else {
      return undefined;
    }
  }
}
