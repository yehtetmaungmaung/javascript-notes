#!/bin/bash
if_list=(
    "eth6p0"
    "eth6p1"
    "eth3bp0"
    "eth3bp1"
)
count=0
mac_addresses=$(cat output_ifconfig.txt | grep -oE '([[:xdigit:]]{2}:){5}[[:xdigit:]]{2}')
readarray -t mac_array <<< "$mac_addresses"
for MAC_ADDRESS in "${mac_array[@]}"; do
    INTERFACE_NAME=$(cat output_ifconfig.txt | grep $MAC_ADDRESS | head -n 1 | awk '{print $1}' | sed 's/://')
    echo "SUBSYSTEM==\"net\", ACTION==\"add\", DRIVERS==\"?*\", ATTR{address}==\"$MAC_ADDRESS\", ATTR{dev_id}==\"0x0\", ATTR{type}==\"1\", NAME=\"${if_list[count]}\"" >> dummy.rules
    count=$((count+1))
done