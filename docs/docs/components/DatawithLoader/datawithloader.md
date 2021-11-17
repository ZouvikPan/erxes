---
id: datawithloader
title: Data with loader
---

import { DatawithLoaderComponent } from "./datawithloader.js"

## Loading

<p>When loading is "true" it'll show spinner or loading content, and when it's "false" it'll show data. </p>
<DatawithLoaderComponent type="loadtrue" />
<DatawithLoaderComponent type="loadingcontent" text="This is loading content"/>
<DatawithLoaderComponent type="loadfalse" />

## Count

<p>When count is "0" it'll show emptyContent or empty state. </p>
<DatawithLoaderComponent type="count" counter={0} image="info-circle" text="This is empty content"/>

## Empty state

<p>Default emptyState. </p>
<DatawithLoaderComponent type="emptystate" counter={0} />

<p>Give empty text by <code>emptyText</code> prop. When there's no empty text it'll show "There is no data". Change icon size with <code>size</code> prop.  </p>
<DatawithLoaderComponent type="emptystate" counter={0} image="info-circle" text="Empty state" sizes="small"/>

## API

<DatawithLoaderComponent type="APIdatewithloader" table={[
['* data', 'any', '', 'Data'],
['count', 'any', '', 'Count'],
['* loading', 'boolean', '', 'Loading state'],
['emptyText','string', 'There is no data', 'Text of emptyState'],
['emptyIcon','string','','Icon of emptyState'],
['emptyImage','string','','Image of emptyState'],
['size','string','full','Size of icon in emptyState'],
['objective','boolean','false','Objective of spinner'],
['emptyContent','node','','Content when count is "0"'],
['loadingContent','node', '','Content when loading is "true"']
]} />