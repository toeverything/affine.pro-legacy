set -e
function obtain_git_branch {
  br=`git branch | grep "*"`
  echo ${br/* /}
}
git checkout -b date-`date +%Y-%m-%d-%H`
echo "####### add file #######"
git add .
echo "####### add commit #######"
git commit -m "add: add the new blog"

git pull origin `obtain_git_branch` && git push origin `obtain_git_branch`

if [ $? -eq 0 ]; then
    echo "\n\n finish push."
else
    echo "\n\n error please retry."
fi