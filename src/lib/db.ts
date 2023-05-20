import {Redis} from "@upstash/redis";

export const db = new Redis({
    url: "https://apn1-amazing-redfish-35467.upstash.io", 
    token: "AYqLASQgYzczZmU0ZWYtYTdmNi00NjA5LWFlN2YtMTU0ZGUwYjhiZjYzMzYxNTI5ODUzMGZiNDgyNDk4ZWEwYTFhMDA3OTA2Y2Y="
})