# Migration `20200926190716`

This migration has been generated by hsnandeeshgowda at 9/27/2020, 12:37:16 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "Link" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "description" TEXT NOT NULL,
    "url" TEXT NOT NULL
)
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20200926190716
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,15 @@
+datasource db {
+    provider = "sqlite"
+    url = "***"
+}
+
+generator client {
+  provider = "prisma-client-js"
+}
+
+model Link {
+    id Int @id @default(autoincrement())
+    createdAt DateTime @default(now())
+    description String
+    url String
+}
```

