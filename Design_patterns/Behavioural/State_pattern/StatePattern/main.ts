// index.ts
import { Homework } from "./Homework";

const hw = new Homework();

hw.review();   // ⚠️ Homework is still in Draft. Cannot review.
hw.submit();   // ✅ Homework submitted for review.
hw.submit();   // ⚠️ Homework already submitted. Cannot submit again.
hw.review();   // ✅ Teacher reviewed the homework.
hw.review();   // ⚠️ Homework already reviewed.
