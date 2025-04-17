# Space Robotics Workshop Website

This repository contains the code that runs the Space Robotics Workshop's website,
[space_robotics](). This code is adapted from [Emobdied AI Workshop](https://github.com/embodied-ai-workshop/embodied-ai.org).


# Setup

```
yarn install
```

# Develop
```
export NODE_OPTIONS=--max-old-space-size=8192
yarn run develop
```

# Errors

```
Error: ENOSPC: System limit for number of file watchers reached, watch ~/space-robotics-workshop
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
```
