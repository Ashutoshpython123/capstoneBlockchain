const router = require("express").Router();
const claim_ctrl = require("../Controller/claim_storeCtrl");
//routes URL
router.get("/claim_store", claim_ctrl.storeClaim);
router.get("/claim_token_distribute", claim_ctrl.sendClaimToken);
module.exports = router;
