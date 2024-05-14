import {getRandomPoint} from '../mock/points.js';

const POINT_COUNT = 6;

export default class PointsModel {
  points = Array.from({length: POINT_COUNT}, getRandomPoint);

  getPoints() {
    return this.points;
  }
}
