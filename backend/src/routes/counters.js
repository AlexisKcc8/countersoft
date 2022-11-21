import { Router } from "express";

const router = Router();

router.get("/counters", (req, res) => {
  res.send("get counters");
});

export default router;
