var localtunnel = require("localtunnel");
localtunnel(5000, { subdomain: "kfjgnsdnrth" }, (err, tunnel) => {
  console.log("LT running on " + tunnel.url);
});
