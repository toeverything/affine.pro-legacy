---
title: Why AFFiNE Chose CRDT over OT to Build a Collaborative Editor
author: Chi Zhang, Yifeng Wang , Ran Chen
tags: Let’s make XXX
cover: ./cover.jpg
description: As an editor supporting multi-user real-time collaboration, AFFiNE needed to address three challenges in terms of data availability
created: 2022-06-26
updated: 2022-06-26
layout: blog
---

As an editor supporting multi-user real-time collaboration, AFFiNE needed to address three challenges in terms of data availability.

- Data replication: AFFiNE needs to synchronize data in a bidirectional manner between multiple server and client nodes.
- Final consistency: Even in the case of network delays and temporary outages, the final state of all nodes in the AFFiNE system can converge and be consistent.
- Conflict resolution: AFFiNE needs to be able to automatically resolve conflicts between concurrent edits.

The above issues are quite common in collaborative applications, whose solutions should be guaranteed by some general collaborative algorithm for reliability. Hundreds of collaboration algorithms have been invented in the last three decades, but they usually fall into two categories: either [Operational Transform](https://en.wikipedia.org/wiki/Operational_transformation) (OT), or [Conflict-free Replicable Data Type](https://en.wikipedia.org/wiki/Conflict-free_replicated_data_type) (CRDT). We believe that CRDT is now a better choice.

## Definitions and Differences between OT and CRDT

If you consider retracing historical state as one of the most rudimentary collaborative capabilities, then you will find the [event sourcing](https://martinfowler.com/eaaDev/EventSourcing.html) design pattern to be the starting point for almost all collaborative capabilities. This pattern requires that we model operations on data _model_ as serializable _operation_ (or command) data structures. For example, the famous [Redux](https://redux.js.org/) library for Web developers is a typical implementation of the event sourcing pattern.

When working with multiple people in real time, the challenge can be seen as arising from the fact that at any given moment, the actions of different users can diverge. However, from the event sourcing perspective, it is clear that we are still dealing with two kinds of data structures, _model_ and _operation_, at this point as well. Accordingly, we can consider that the core of OT is the transformation of operation data, where the transformed operation data can be applied to the regular model on different clients, while the core of CRDT is a concurrent merge-friendly model that allows different clients to merge operations in any time sequence. Although it is now argued that OT and CRDT [share essentially the same theoretical basis](https://medium.com/@raphlinus/towards-a-unified-theory-of-operational-transformation-and-crdt-70485876f72f), we believe that the above profile is still a practical mental model for understanding the mechanisms of both approaches.

## Why We Prefer CRDT

For CRDT, each update acts like a "historical fragment". We keep collecting fragments from other clients and then restore the final consistent truth based on the [logical timestamp](https://en.wikipedia.org/wiki/Lamport_timestamp) carried on these fragments. We believe that such way how CRDT works has three major advantages over OT.

### Decentralization

Since CRDT data models are designed to resolve conflicts independently on any client, they does not need to introduce a central node to uniquely determine the merge time sequence of operations. This not only reduces the dependency on a single point of server, but also makes it possible to implement a next-generation [local first](https://www.inkandswitch.com/local-first/) application architecture that combines the advantages of traditional local and collaborative applications, and even technically supports end-to-end encrypted collaboration.

### **Performance**

While prior CRDT implementations for academic research purposes were considered to have poor performance, after industry [optimization](https://blog.kevinjahns.de/are-crdts-suitable-for-shared-editing/) in recent years, it has achieved throughput [beyond](https://josephg.com/blog/crdts-go-brrr/) that of traditional OT implementations, and its memory footprint has been reduced to an acceptable level. Also due to the decentralized nature of CRDT, it can tolerate higher latency and can resolve conflicts after a longer offline time. By contrast, OT computation under the same conditions can be overwhelming for servers.

### Flexibility and Usability

CRDT supports a wider range of data types. For example, [Yjs](https://github.com/yjs/yjs) supports Text, Array, Map and Tree-like data structures, making it suitable for more business scenarios. Since CRDT supports more data types, it is generally more extensible. Compared to the OT library, which requires a thorough modeling of business logic as different types of operation data structures, when using the CRDT library, you only need to perform the same operation on common data structures, such as Map and Array, to their corresponding CRDT models equally. In some ways, this is like using a more powerful and easier API for application state management, acting like what Redux does, with a lower overall cost of access.

## Conclusion

Collaboration algorithms are still unfamiliar to many developers. Conceptual presentations about them are often made, but there is still a lack of clear explanations about how to use them. If you are also working in a startup developing an editor and would like advice on it, then our opinion is that CRDT, and especially by now Yjs, should be quite a worthwhile option to consider.
