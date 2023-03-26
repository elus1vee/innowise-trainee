// eslint-disable-next-line import/extensions, quotes
import { User } from "./script/User.js";

const het = new User();

het.add(10);
het.exp(3);
het.multiply(5);
het.unexecute();
het.inv();
het.unexecute();
console.log(het.getCount());
