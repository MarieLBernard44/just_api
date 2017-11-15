#!/bin/sh

/etc/init.d/mysql start
# create database
mysql -u root -e "create database just_api;"
sleep 2;
mysql -u root --password=root just_api < dump.sql; 
