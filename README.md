# @clappia-dev/capacitor-system-settings

Capacitor plugin to access the attributes of Developer Options (Android only)

## Install

```bash
npm install @clappia/capacitor-system-settings
npx cap sync
```

## API

<docgen-index>

* [`getDeveloperOptions()`](#getdeveloperoptions)
* [`getNumberFormatInfo()`](#getnumberformatinfo)
* [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### getDeveloperOptions()

```typescript
getDeveloperOptions() => Promise<{ developerOptionsEnabled: boolean; }>
```

Returns a map { developerOptionsEnabled: boolean } indicating whether the developer options are enabled.
In future, this will return more attributes related to the system settings.

**Returns:** <code>Promise&lt;{ developerOptionsEnabled: boolean; }&gt;</code>

--------------------


### getNumberFormatInfo()

```typescript
getNumberFormatInfo() => Promise<NumberFormatInfo>
```

Returns number format information including decimal and grouping separators.

**Returns:** <code>Promise&lt;<a href="#numberformatinfo">NumberFormatInfo</a>&gt;</code>

--------------------


### Interfaces


#### NumberFormatInfo

| Prop                    | Type                |
| ----------------------- | ------------------- |
| **`decimalSeparator`**  | <code>string</code> |
| **`groupingSeparator`** | <code>string</code> |

</docgen-api>
