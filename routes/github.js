const GITHUB_API_URL = 'https://api.github.com';

// Prepare axios for GitHub API
const axiosBase = require('axios');
const github = axiosBase.create({
  baseURL: GITHUB_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  responseType: 'json',
});

var express = require('express');
var router = express.Router();

async function listFileOnRepository(){
  // /repos/:owner/:repo/branches/:branch
  let url = `/repos/nakano16180/robot-web-viewer/branches/master`;
  const res1 = await github.get(url)
  .catch(function(error) {
    console.log('ERROR!! can not get information on repository.');
    console.log(error);
  });

  let tree_sha = res1.data.commit.commit.tree.sha;
  // /repos/:owner/:repo/git/trees/:tree_sha
  let url2 = `/repos/nakano16180/robot-web-viewer/git/trees/${tree_sha}?recursive=true`;
  const res2 = await github.get(url2)
  .catch(function(error) {
    console.log('ERROR!! occurred in Backend.');
    console.log(error);
  });

  return res2.data;
}
/* GET home page. */
router.get('/', async function(req, res, next) {
  const result = await listFileOnRepository();
  console.log("----- result -----");
  console.log(result);

  res.json(result);
});

module.exports = router;
