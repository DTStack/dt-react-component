#!/bin/bash

# Project name
export project_name="dt-react-component";
# Temporary store project
export temp_path="/home/temp/$project_name";
# Server nginx root path
export server_root_path="/home/app/$project_name";
# 3.10.x testing enviroment
export server="172.16.100.225";

echo "project name: $project_name"
echo "temp path: $temp_path"
echo "server root path: $server_root_path"
echo "server address: $server"
