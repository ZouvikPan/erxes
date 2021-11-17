---
id: collapsecontent
title: Collapse Content
---

import { CollapseContentComponent } from "./collapsecontent.js"

## Simple

<p>Simplest collapse content have title and children.</p>
<CollapseContentComponent />

## Description

<p>Add description by <code>description</code> prop. </p>
<CollapseContentComponent type="desc" text="Description"/>

## Image

<p>Add image by <code>image</code> prop. </p>
<CollapseContentComponent img="https://erxes.io/static/images/logo/logo_dark.svg" />

## Image background color

<p>Add image background color by <code>imageBackground</code> prop. </p>
<CollapseContentComponent img="https://erxes.io/static/images/logo/logo_dark.svg" color="yellow"/>

## Before title

<p>Add something before title by <code>beforeTitle</code> prop. </p>
<CollapseContentComponent type ="icon" text="O"/>

## ContendId

<p>Use <code>contentId</code> for jump to content.</p>
<CollapseContentComponent type="contentid" text="contendId"/>

## Compact

<p><code>compact</code> prop defines height of title container.</p>
<CollapseContentComponent comp />

## Open

<p>Activates open function of container and collapse tag by <code>open</code> prop. </p>
<CollapseContentComponent opens />

## API

<CollapseContentComponent type="APIcollapsecontent" table={[
  ['contendId', 'string', '', 'Jump to content'],
  ['* title', 'string', '', 'Title'],
  ['description', 'node', '', 'Description that will be displayed under title'],
  ['open', 'boolean', '', 'Activates open function of container and collapse tag'],
  ['compact', 'boolean', '20px', 'Height of title container'],
  ['image', 'string', '','Image that will be placed instead of arrows'],
  ['beforeTitle', 'node','','Node that will be placed left side of title'],
  ['imageBackground', 'string', '','Background color of image'],
]} />