export default class Util {

    /**
     * 判断点是否在形状里
     * @param {} x 
     * @param {*} y 
     * @param {*} poly 
     */
    static pointInPolygon(x, y, poly) {

        let inside = false;
        for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
            const xi = poly[i].x, yi = poly[i].y;
            const xj = poly[j].x, yj = poly[j].y;

            const intersect = ((yi > y) != (yj > y))
                && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
            if (intersect) inside = !inside;
        }

        return inside;

    }


    /**
     * 计算边界
     */

    static calGeoBoundofNodeArr(boards) {
        let maxx = boards[0].x,
            minx = boards[0].x,
            maxy = boards[0].y,
            miny = boards[0].y;

        for (let i = 0; i < boards.length; i++) {
            if (boards[i].x > maxx) {
                maxx = boards[i].x;
            }

            if (boards[i].x < minx) {
                minx = boards[i].x;
            }

            if (boards[i].y > maxy) {
                maxy = boards[i].y;
            }

            if (boards[i].y < miny) {
                miny = boards[i].y;
            }
        }

        return {
            maxx,
            maxy,
            minx,
            miny
        }

    }

}