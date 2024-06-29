# Why `features`? What is this directory?

For me features serves a set of SDK grouped into the functionality of the business logic itself. It stores all components, presentations, api calls in them. This also makes sure that every functionality are isolated to itself and pure enough to be used in multiple places.

Also every directory prefixed with `-` means the directory is private. Importing it directly from the outside might cause breaking changes. This is only some kind of good standardization that prevent hard future impovements for the components / features.

## Improvements
this feature has dependecy to HoverDialogContext, should be improved
