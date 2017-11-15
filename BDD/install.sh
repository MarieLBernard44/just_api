#!/bin/sh

/etc/init.d/mysql start
# create database
mysql -u root -e "create database just_api;"
#mysql -u imie --password=passe just_api < dump.sql; 
