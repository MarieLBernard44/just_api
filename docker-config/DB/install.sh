#!/bin/bash 

echo 'Start Mysql daemon';
/etc/init.d/mysql start

echo 'Create & populate database';
mysql -u root -e "create database just_api; USE just_api; SOURCE ./dump.sql;"; 
sleep 2;
