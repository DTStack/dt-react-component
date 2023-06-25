#!/bin/bash

# 部署文档执行 `yarn deploy`，需要先将 `const.sh` 里的 server 改为 225 的机器 ip
# 1. Build project locally;
# 2. Upload dist to the temp path of target server ;
# 3. Login remote ssh server;
# 4. Remove old project files;
# 5. Move built files to static server path
#

source $(dirname "$0")/const.sh

# Step 1
npm run build-storybook

# Step 2, SCP 上传文件到指定服务器
echo "Uploading ./dist to $server:$temp_path"
scp -P 22 -r ./dist root@$server:$temp_path
echo "Upload over."

# Step 3
echo "Login remote server $server"
ssh -t root@$server "

echo "删除原文件$server_root_path"
rm -rf $server_root_path

cp $temp_path -r $server_root_path
echo "拷贝到目标文件$server_root_path"

echo "删除临时文件夹"
rm -rf  $temp_path

exit;
"
echo "Deploy success!"
