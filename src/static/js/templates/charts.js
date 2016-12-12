"use strict";

var charts = [{
  // Auto loans: Lending Levels
  "title": "Number of loans originated",
  "chartType": "line",
  "yAxisUnit": "M",
  "market": "auto-loans",
  "reportType": "origination-activity",
  "figureID": "figure-1a",
  "source": "num_data_AUT.csv",
  "elementID": "figure-1a__number__auto-loans"
},
{
  "title": "Volume of loans originated",
  "chartType": "line",
  "yAxisUnit": "B",
  "market": "auto-loans",
  "reportType": "origination-activity",
  "figureID": "figure-1a",
  "source": "vol_data_AUT.csv",
  "elementID": "figure-1a__volume__auto-loans"
},
{
  "title": "",
  "chartType": "map",
  "market": "auto-loans",
  "reportType": "origination-activity",  
  "figureID": "figure-1c",
  "source": "map_data_AUT.csv",
  "elementID": "figure-1c__map__auto-loans"
},
{
  "title": "Number of loans originated",
  "chartType": "bar",
  "market": "auto-loans",
  "reportType": "origination-activity",  
  "figureID": "figure-1b",
  "source": "yoy_data_all_AUT.csv",
  "elementID": "figure-1b__number__auto-loans",
  "group": "Number of Loans"
},
{
  "title": "Volume of loans originated",
  "chartType": "bar",
  "market": "auto-loans",
  "reportType": "origination-activity",  
  "figureID": "figure-1b",
  "source": "yoy_data_all_AUT.csv",
  "elementID": "figure-1b__volume__auto-loans",
  "group": "Dollar Volume"
},
{ // Borrower Risk Profiles: Credit score
  "title": "Deep subprime (credit scores below 580)",
  "chartType": "line",
  "yAxisUnit": "B",
  "market": "auto-loans",
  "reportType": "borrower-risk-profiles",  
  "figureID": "figure-2a",
  "source": "volume_data_Score_Level_AUT.csv",
  "elementID": "figure-2a__deep-subprime__auto-loans",
  // Only add a group property if the data file needs to be filtered!
  "group": "Deep Subprime"
},
{
  "title": "Subprime (credit scores 580 - 619)",
  "chartType": "line",
  "yAxisUnit": "B",
  "market": "auto-loans",
  "reportType": "borrower-risk-profiles",  
  "figureID": "figure-2a",
  "source": "volume_data_Score_Level_AUT.csv",
  "elementID": "figure-2a__subprime__auto-loans",
  "group": "Subprime"
},
{
  "title": "Near prime (credit scores 620 - 679)",
  "chartType": "line",
  "yAxisUnit": "B",
  "market": "auto-loans",
  "reportType": "borrower-risk-profiles",  
  "figureID": "figure-2a",
  "source": "volume_data_Score_Level_AUT.csv",
  "elementID": "figure-2a__near-prime__auto-loans",
  "group": "Near Prime"
},
{
  "title": "Prime (credit scores 680 - 719)",
  "chartType": "line",
  "yAxisUnit": "B",
  "market": "auto-loans",
  "reportType": "borrower-risk-profiles",  
  "figureID": "figure-2a",
  "source": "volume_data_Score_Level_AUT.csv",
  "elementID": "figure-2a__prime__auto-loans",
  "group": "Prime"
},
{
  "title": "Superprime (credit scores 720 and above)",
  "chartType": "line",
  "yAxisUnit": "B",
  "market": "auto-loans",
  "reportType": "borrower-risk-profiles",  
  "figureID": "figure-2a",
  "source": "volume_data_Score_Level_AUT.csv",
  "elementID": "figure-2a__superprime__auto-loans",
  "group": "Superprime"
},
{ // Year over year changes
  "title": "Deep subprime (credit scores below 580)",
  "chartType": "bar",
  "market": "auto-loans",
  "reportType": "borrower-risk-profiles",  
  "figureID": "figure-2b",
  "source": "yoy_data_Score_Level_AUT.csv",
  "elementID": "figure-2b__deep-subprime__auto-loans",
  "group": "Deep Subprime"
},
{
  "title": "Subprime (credit scores 580 - 619)",
  "chartType": "bar",
  "market": "auto-loans",
  "reportType": "borrower-risk-profiles",  
  "figureID": "figure-2b",
  "source": "yoy_data_Score_Level_AUT.csv",
  "elementID": "figure-2b__subprime__auto-loans",
  "group": "Subprime"
},
{
  "title": "Near prime (credit scores 620 - 679)",
  "chartType": "bar",
  "market": "auto-loans",
  "reportType": "borrower-risk-profiles",  
  "figureID": "figure-2b",
  "source": "yoy_data_Score_Level_AUT.csv",
  "elementID": "figure-2b__near-prime__auto-loans",
  "group": "Near Prime"
},
{
  "title": "Prime (credit scores 680 - 719)",
  "chartType": "bar",
  "market": "auto-loans",
  "reportType": "borrower-risk-profiles",  
  "figureID": "figure-2b",
  "source": "yoy_data_Score_Level_AUT.csv",
  "elementID": "figure-2b__prime__auto-loans",
  "group": "Prime"
},
{
  "title": "Superprime (credit scores 720 and above)",
  "chartType": "bar",
  "market": "auto-loans",
  "reportType": "borrower-risk-profiles",  
  "figureID": "figure-2b",
  "source": "yoy_data_Score_Level_AUT.csv",
  "elementID": "figure-2b__superprime__auto-loans",
  "group": "Superprime"
},
// Income level
{ // Lending level Line charts
  "title": "Low income (relative income less than 50%)",
  "chartType": "line",
  "yAxisUnit": "B",
  "market": "auto-loans",
  "reportType": "income-level",  
  "figureID": "figure-3a",
  "source": "volume_data_Income_Level_AUT.csv",
  "elementID": "figure-3a__low-income__auto-loans",
  "group": "Low"
},
{
  "title": "Moderate income (relative income 50 to 79%)",
  "chartType": "line",
  "yAxisUnit": "B",
  "market": "auto-loans",
  "reportType": "income-level",  
  "figureID": "figure-3a",
  "source": "volume_data_Income_Level_AUT.csv",
  "elementID": "figure-3a__moderate-income__auto-loans",
  "group": "Moderate"
},
{
  "title": "Middle income (relative income 80 to 119%)",
  "chartType": "line",
  "yAxisUnit": "B",
  "market": "auto-loans",
  "reportType": "income-level",  
  "figureID": "figure-3a",
  "source": "volume_data_Income_Level_AUT.csv",
  "elementID": "figure-3a__middle-income__auto-loans",
  "group": "Middle"
},
{
  "title": "High income (relative income 120% or above)",
  "chartType": "line",
  "yAxisUnit": "B",
  "market": "auto-loans",
  "reportType": "income-level",  
  "figureID": "figure-3a",
  "source": "volume_data_Income_Level_AUT.csv",
  "elementID": "figure-3a__high-income__auto-loans",
  "group": "High"
},
{ // Year over year bar charts
  "title": "Low income (relative income less than 50%)",
  "chartType": "bar",
  "market": "auto-loans",
  "reportType": "income-level",  
  "figureID": "figure-3b",
  "source": "yoy_data_Income_Level_AUT.csv",
  "elementID": "afigure-3b__low-income__auto-loans",
  "group": "Low"
},
{
  "title": "Moderate income (relative income 50 to 79%)",
  "chartType": "bar",
  "market": "auto-loans",
  "reportType": "income-level",  
  "figureID": "figure-3b",
  "source": "yoy_data_Income_Level_AUT.csv",
  "elementID": "figure-3b__moderate-income__auto-loans",
  "group": "Moderate"
},
{
  "title": "Middle income (relative income 80 to 119%)",
  "chartType": "bar",
  "market": "auto-loans",
  "reportType": "income-level",  
  "figureID": "figure-3b",
  "source": "yoy_data_Income_Level_AUT.csv",
  "elementID": "figure-3b__middle-income__auto-loans",
  "group": "Middle"
},
{
  "title": "High income (relative income 120% or above)",
  "chartType": "bar",
  "market": "auto-loans",
  "reportType": "income-level",  
  "figureID": "figure-3b",
  "source": "yoy_data_Income_Level_AUT.csv",
  "elementID": "figure-3b__high-income__auto-loans",
  "group": "High"
},
// Borrower age
{ // Lending level Line charts
  "title": "Younger than 30",
  "chartType": "line",
  "yAxisUnit": "B",
  "market": "auto-loans",
  "reportType": "borrower-age",  
  "figureID": "figure-4a",
  "source": "volume_data_Age_Group_AUT.csv",
  "elementID": "figure-4a__younger-than-30__auto-loans",
  "group": "Younger than 30"
},
{
  "title": "Age 30 to 44",
  "chartType": "line",
  "yAxisUnit": "B",
  "market": "auto-loans",
  "reportType": "borrower-age",  
  "figureID": "figure-4a",
  "source": "volume_data_Age_Group_AUT.csv",
  "elementID": "figure-4a__30-to-44__auto-loans",
  "group": "30 - 44"
},
{
  "title": "Age 45 to 64",
  "chartType": "line",
  "yAxisUnit": "B",
  "market": "auto-loans",
  "reportType": "borrower-age",  
  "figureID": "figure-4a",
  "source": "volume_data_Age_Group_AUT.csv",
  "elementID": "figure-4a__45-to-64__auto-loans",
  "group": "45 - 64"
},
{
  "title": "Age 65 and older",
  "chartType": "line",
  "yAxisUnit": "B",
  "market": "auto-loans",
  "reportType": "borrower-age",  
  "figureID": "figure-4a",
  "source": "volume_data_Age_Group_AUT.csv",
  "elementID": "figure-4a__65-and-older__auto-loans",
  "group": "65 and older"
},
{ // Year over year bar charts
  "title": "Younger than 30",
  "chartType": "bar",
  "market": "auto-loans",
  "reportType": "borrower-age",  
  "figureID": "figure-4b",
  "source": "yoy_data_Age_Group_AUT.csv",
  "elementID": "figure-4b__younger-than-30__auto-loans",
  "group": "Younger than 30"
},
{
  "title": "Age 30 to 44",
  "chartType": "bar",
  "market": "auto-loans",
  "reportType": "borrower-age",  
  "figureID": "figure-4b",
  "source": "yoy_data_Age_Group_AUT.csv",
  "elementID": "figure-4b__30-to-44__auto-loans",
  "group": "30 - 44"
},
{
  "title": "Age 45 to 64",
  "chartType": "bar",
  "market": "auto-loans",
  "reportType": "borrower-age",  
  "figureID": "figure-4b",
  "source": "yoy_data_Age_Group_AUT.csv",
  "elementID": "figure-4b__45-to-64__auto-loans",
  "group": "45 - 64"
},
{
  "title": "Age 65 and older",
  "chartType": "bar",
  "market": "auto-loans",
  "reportType": "borrower-age",  
  "figureID": "figure-4b",
  "source": "yoy_data_Age_Group_AUT.csv",
  "elementID": "figure-4b__65-and-older__auto-loans",
  "group": "65 and older"
},
{ // Credit cards: Lending Levels
  "title": "Number of loans originated",
  "chartType": "line",
  "yAxisUnit": "M",
  "market": "credit-cards",
  "reportType": "origination-activity",
  "figureID": "figure-1a",
  "source": "num_data_CRC.csv",
  "elementID": "figure-1a__number__credit-cards",
},
{
  "title": "Volume of loans originated",
  "chartType": "line",
  "yAxisUnit": "B",
  "market": "credit-cards",
  "reportType": "origination-activity",
  "figureID": "figure-1a",
  "source": "vol_data_CRC.csv",
  "elementID": "figure-1a__volume__credit-cards"
},
{
  "title": "",
  "chartType": "map",
  "market": "credit-cards",
  "reportType": "origination-activity",  
  "figureID": "figure-1c",
  "source": "map_data_CRC.csv",
  "elementID": "figure-1c__map__credit-cards"
},
{
  "title": "Number of loans originated",
  "chartType": "bar",
  "market": "credit-cards",
  "reportType": "origination-activity",  
  "figureID": "figure-1b",
  "source": "yoy_data_all_AUT.csv",
  "elementID": "figure-1b__yoy-number__credit-cards"
},
{
  "title": "Volume of loans originated",
  "chartType": "bar",
  "market": "credit-cards",
  "reportType": "origination-activity",  
  "figureID": "figure-1b",
  "source": "yoy_data_all_AUT.csv",
  "elementID": "figure-1b__yoy-volume__credit-cards"
},
{ // Borrower Risk Profiles: Credit score
  "title": "Deep subprime (credit scores below 580)",
  "chartType": "line",
  "yAxisUnit": "B",
  "market": "credit-cards",
  "reportType": "borrower-risk-profiles",  
  "figureID": "figure-2a",
  "source": "volume_data_Score_Level_CRC.csv",
  "elementID": "figure-2a__deep-subprime__credit-cards",
  // Only add a group property if the data file needs to be filtered!
  "group": "Deep Subprime"
},
{
  "title": "Subprime (credit scores 580 - 619)",
  "chartType": "line",
  "yAxisUnit": "B",
  "market": "credit-cards",
  "reportType": "borrower-risk-profiles",  
  "figureID": "figure-2a",
  "source": "volume_data_Score_Level_CRC.csv",
  "elementID": "figure-2a__subprime__credit-cards",
  "group": "Subprime"
},
{
  "title": "Near prime (credit scores 620 - 679)",
  "chartType": "line",
  "yAxisUnit": "B",
  "market": "credit-cards",
  "reportType": "borrower-risk-profiles",  
  "figureID": "figure-2a",
  "source": "volume_data_Score_Level_CRC.csv",
  "elementID": "figure-2a__near-prime__credit-cards",
  "group": "Near Prime"
},
{
  "title": "Prime (credit scores 680 - 719)",
  "chartType": "line",
  "yAxisUnit": "B",
  "market": "credit-cards",
  "reportType": "borrower-risk-profiles",  
  "figureID": "figure-2a",
  "source": "volume_data_Score_Level_CRC.csv",
  "elementID": "figure-2a__prime__credit-cards",
  "group": "Prime"
},
{
  "title": "Superprime (credit scores 720 and above)",
  "chartType": "line",
  "yAxisUnit": "B",
  "market": "credit-cards",
  "reportType": "borrower-risk-profiles",  
  "figureID": "figure-2a",
  "source": "volume_data_Score_Level_CRC.csv",
  "elementID": "figure-2a__superprime__credit-cards",
  "group": "Superprime"
},
{ // Year over year changes
  "title": "Deep subprime (credit scores below 580)",
  "chartType": "bar",
  "market": "credit-cards",
  "reportType": "borrower-risk-profiles",  
  "figureID": "figure-2b",
  "source": "yoy_data_Score_Level_CRC.csv",
  "elementID": "figure-2b__deep-subprime__credit-cards",
  "group": "Deep Subprime"
},
{
  "title": "Subprime (credit scores 580 - 619)",
  "chartType": "bar",
  "market": "credit-cards",
  "reportType": "borrower-risk-profiles",  
  "figureID": "figure-2b",
  "source": "yoy_data_Score_Level_CRC.csv",
  "elementID": "figure-2b__subprime__credit-cards",
  "group": "Subprime"
},
{
  "title": "Near prime (credit scores 620 - 679)",
  "chartType": "bar",
  "market": "credit-cards",
  "reportType": "borrower-risk-profiles",  
  "figureID": "figure-2b",
  "source": "yoy_data_Score_Level_CRC.csv",
  "elementID": "figure-2b__near-prime__credit-cards",
  "group": "Near Prime"
},
{
  "title": "Prime (credit scores 680 - 719)",
  "chartType": "bar",
  "market": "credit-cards",
  "reportType": "borrower-risk-profiles",  
  "figureID": "figure-2b",
  "source": "yoy_data_Score_Level_CRC.csv",
  "elementID": "figure-2b__prime__credit-cards",
  "group": "Prime"
},
{
  "title": "Superprime (credit scores 720 and above)",
  "chartType": "bar",
  "market": "credit-cards",
  "reportType": "borrower-risk-profiles",  
  "figureID": "figure-2b",
  "source": "yoy_data_Score_Level_CRC.csv",
  "elementID": "figure-2b__superprime__credit-cards",
  "group": "Superprime"
},
// Income level
{ // Lending level Line charts
  "title": "Low income (relative income less than 50%)",
  "chartType": "line",
  "yAxisUnit": "B",
  "market": "credit-cards",
  "reportType": "income-level",  
  "figureID": "figure-3a",
  "source": "volume_data_Income_Level_CRC.csv",
  "elementID": "figure-3a__low__credit-cards",
  "group": "Low"
},
{
  "title": "Moderate income (relative income 50 to 79%)",
  "chartType": "line",
  "yAxisUnit": "B",
  "market": "credit-cards",
  "reportType": "income-level",  
  "figureID": "figure-3a",
  "source": "volume_data_Income_Level_CRC.csv",
  "elementID": "figure-3a__moderate__credit-cards",
  "group": "Moderate"
},
{
  "title": "Middle income (relative income 80 to 119%)",
  "chartType": "line",
  "yAxisUnit": "B",
  "market": "credit-cards",
  "reportType": "income-level",  
  "figureID": "figure-3a",
  "source": "volume_data_Income_Level_CRC.csv",
  "elementID": "figure-3a__middle__credit-cards",
  "group": "Middle"
},
{
  "title": "High income (relative income 120% or above)",
  "chartType": "line",
  "yAxisUnit": "B",
  "market": "credit-cards",
  "reportType": "income-level",  
  "figureID": "figure-3a",
  "source": "volume_data_Income_Level_CRC.csv",
  "elementID": "figure-3a__high__credit-cards",
  "group": "High"
},
{ // Year over year bar charts
  "title": "Low income (relative income less than 50%)",
  "chartType": "bar",
  "market": "credit-cards",
  "reportType": "income-level",  
  "figureID": "figure-3b",
  "source": "yoy_data_Income_Level_CRC.csv",
  "elementID": "figure-3b__low__credit-cards",
  "group": "Low"
},
{
  "title": "Moderate income (relative income 50 to 79%)",
  "chartType": "bar",
  "market": "credit-cards",
  "reportType": "income-level",  
  "figureID": "figure-3b",
  "source": "yoy_data_Income_Level_CRC.csv",
  "elementID": "figure-3b__moderate__credit-cards",
  "group": "Moderate"
},
{
  "title": "Middle income (relative income 80 to 119%)",
  "chartType": "bar",
  "market": "credit-cards",
  "reportType": "income-level",  
  "figureID": "figure-3b",
  "source": "yoy_data_Income_Level_CRC.csv",
  "elementID": "figure-3b__middle__credit-cards",
  "group": "Middle"
},
{
  "title": "High income (relative income 120% or above)",
  "chartType": "bar",
  "market": "credit-cards",
  "reportType": "income-level",  
  "figureID": "figure-3b",
  "source": "yoy_data_Income_Level_CRC.csv",
  "elementID": "figure-3b__high__credit-cards",
  "group": "High"
},
// Borrower age
{ // Lending level Line charts
  "title": "Younger than 30",
  "chartType": "line",
  "yAxisUnit": "B",
  "market": "credit-cards",
  "reportType": "borrower-age",  
  "figureID": "figure-4a",
  "source": "volume_data_Age_Group_CRC.csv",
  "elementID": "figure-4a__younger-than-30__credit-cards",
  "group": "Younger than 30"
},
{
  "title": "Age 30 to 44",
  "chartType": "line",
  "yAxisUnit": "B",
  "market": "credit-cards",
  "reportType": "borrower-age",  
  "figureID": "figure-4a",
  "source": "volume_data_Age_Group_CRC.csv",
  "elementID": "figure-4a__30-to-44__credit-cards",
  "group": "30 - 44"
},
{
  "title": "Age 45 to 64",
  "chartType": "line",
  "yAxisUnit": "B",
  "market": "credit-cards",
  "reportType": "borrower-age",  
  "figureID": "figure-4a",
  "source": "volume_data_Age_Group_CRC.csv",
  "elementID": "figure-4a__45-to-64__credit-cards",
  "group": "45 - 64"
},
{
  "title": "Age 65 and older",
  "chartType": "line",
  "yAxisUnit": "B",
  "market": "credit-cards",
  "reportType": "borrower-age",  
  "figureID": "figure-4a",
  "source": "volume_data_Age_Group_CRC.csv",
  "elementID": "figure-4a__65-and-older__credit-cards",
  "group": "65 and older"
},
{ // Year over year bar charts
  "title": "Younger than 30",
  "chartType": "bar",
  "market": "credit-cards",
  "reportType": "borrower-age",  
  "figureID": "figure-4b",
  "source": "yoy_data_Age_Group_CRC.csv",
  "elementID": "figure-4b__younger-than-30__credit-cards",
  "group": "Younger than 30"
},
{
  "title": "Age 30 to 44",
  "chartType": "bar",
  "market": "credit-cards",
  "reportType": "borrower-age",  
  "figureID": "figure-4b",
  "source": "yoy_data_Age_Group_CRC.csv",
  "elementID": "figure-4b__30-to-44__credit-cards",
  "group": "30 - 44"
},
{
  "title": "Age 45 to 64",
  "chartType": "bar",
  "market": "credit-cards",
  "reportType": "borrower-age",  
  "figureID": "figure-4b",
  "source": "yoy_data_Age_Group_CRC.csv",
  "elementID": "figure-4b__45-to-64__credit-cards",
  "group": "45 - 64"
},
{
  "title": "Age 65 and older",
  "chartType": "bar",
  "market": "credit-cards",
  "reportType": "borrower-age",  
  "figureID": "figure-4b",
  "source": "yoy_data_Age_Group_CRC.csv",
  "elementID": "figure-4b__65-and-older__credit-cards",
  "group": "65 and older"
}
]

module.exports = charts;
